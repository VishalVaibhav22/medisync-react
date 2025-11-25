import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets, doctors as localDoctors } from "../assets/assets"; // fallback data
import RelatedDoctors from "../components/RelatedDoctors";
import { toast } from "react-toastify";
import axios from "axios";
import SlotSelector from "../components/SlotSelector";

const Appointment = () => {
 
  const { docId: rawDocId } = useParams();
  const docId = rawDocId ? decodeURIComponent(rawDocId) : undefined;

  const { doctors: contextDoctors, token, backendUrl, getDoctorsData } =
    useContext(AppContext) || {};

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const navigate = useNavigate();
  const containerRef = useRef(null);

  
  useEffect(() => {
    if (containerRef.current) {
      
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [docSlots]);


  useEffect(() => {
    fetchDocInfo();
    
  }, [contextDoctors, docId]);

  
  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    } else {
      setDocSlots([]);
    }
  
  }, [docInfo]);

  const fetchDocInfo = async () => {
    
    const source = Array.isArray(contextDoctors) && contextDoctors.length ? contextDoctors : localDoctors || [];

    if (!docId) {
      setDocInfo(null);
      return;
    }

    const found = source.find((d) => String(d._id) === String(docId));
    setDocInfo(found || null);
  };

  const checkSlotAvailable = (docInfoLocal, slotDate, slotTimeLocal) => {

    if (!docInfoLocal || !docInfoLocal.slots_booked) return true;

    const daySlots = docInfoLocal.slots_booked?.[slotDate];
    if (!Array.isArray(daySlots)) return true;
    return !daySlots.includes(slotTimeLocal);
  };

  const getAvailableSlots = async () => {
   
    if (!docInfo) {
      setDocSlots([]);
      return;
    }

    setDocSlots([]);

    const today = new Date();

    const generateSlotDate = (date) =>
      `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`;

    const weeksSlots = [];

    for (let i = 0; i < 7; i++) {
      
      const dayStart = new Date(today);
      dayStart.setDate(today.getDate() + i);

    
      const current = new Date(dayStart);

      
      const endTime = new Date(dayStart);
      endTime.setHours(21, 0, 0, 0);

     
      if (i === 0) {
        
        const nextHour = current.getHours() + 1;
        current.setHours(Math.max(nextHour, 10));
        
        if (current.getMinutes() > 30) current.setMinutes(30);
        else current.setMinutes(0);
        current.setSeconds(0);
        current.setMilliseconds(0);
      } else {
        current.setHours(10, 0, 0, 0);
      }

      const timeSlots = [];

      
      while (current < endTime) {
        const formattedTime = current.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        const slotDate = generateSlotDate(current);
        const isAvailable = checkSlotAvailable(docInfo, slotDate, formattedTime);

        if (isAvailable) {
          timeSlots.push({
            datetime: new Date(current),
            time: formattedTime,
          });
        }

        // increment by 30 minutes
        current.setMinutes(current.getMinutes() + 30);
      }

      
      if (timeSlots.length === 0) {
       
        const placeholderDate = new Date(dayStart);
        placeholderDate.setHours(10, 0, 0, 0);
        timeSlots.push({ datetime: placeholderDate, time: false });
      }

      weeksSlots.push(timeSlots);
    }

    setDocSlots(weeksSlots);
   
    setSlotIndex(0);
    setSlotTime("");
  };

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Login to book appointment");
      return navigate("/login");
    }

    if (!slotTime) {
      return toast.error("Please select the slot time");
    }

    try {

      const selectedDay = docSlots[slotIndex] && docSlots[slotIndex][0] && docSlots[slotIndex][0].datetime;
      if (!selectedDay) return toast.error("Invalid slot selected");

      const day = selectedDay.getDate();
      const month = selectedDay.getMonth() + 1;
      const year = selectedDay.getFullYear();

      const slotDate = `${day}_${month}_${year}`;

      const { data } = await axios.post(
        backendUrl + "/api/user/book-appointment",
        { docId, slotDate, slotTime },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
      
        if (typeof getDoctorsData === "function") getDoctorsData();
        navigate("/my-appointments");
      } else {
        toast.error(data.message || "Booking failed");
      }
    } catch (error) {
      console.error("error:", error);
      toast.error(error?.message || "Booking failed");
    }
  };

  
  if (!docId) {
    return <div className="p-6 text-center text-gray-600">Invalid appointment link.</div>;
  }

  if (docInfo === null) {
   
    return <div className="p-6 text-center text-gray-600">Doctor not found.</div>;
  }

  if (!docInfo) {
    
    return <div className="p-6 text-center text-gray-600">Loading doctor info…</div>;
  }


  return (
    <div>
      {/* --------------Doctor Details ----------------- */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-auto">
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg object-cover"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>

        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[80px] sm:mt-0">
          {/* --------------- Doc info name , degree , experience       --------------- */}
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="verified" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button>
          </div>

          {/* ------------- Doctor About */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium mt-3">
              About <img src={assets.info_icon} alt="info" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee:{" "}
            <span className="text-gray-600">
              ₹{docInfo.fees}
            </span>{" "}
          </p>
        </div>
      </div>

      {/* ---------- Booking slots */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking slots</p>

        <div
          className="flex gap-3 items-center w-full overflow-x-scroll mt-4"
          ref={containerRef} // attach ref so scroll works
        >
          {Array.isArray(docSlots) && docSlots.length > 0 ? (
            docSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSlotIndex(index);
                  setSlotTime(""); // clear time selection when changing day
                }}
                className={`text-center py-6 min-w-16 px-4 rounded-full cursor-pointer ${
                  slotIndex === index ? "bg-primary text-white" : "border border-gray-200"
                }`}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          ) : (
            <div className="text-gray-500 p-4">No slots available</div>
          )}
        </div>

        <SlotSelector
          docSlots={docSlots}
          slotIndex={slotIndex}
          slotTime={slotTime}
          setSlotTime={setSlotTime}
        />
        <button
          onClick={bookAppointment}
          className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-5"
        >
          Book an appointment
        </button>
      </div>

      {/* ------------------listing related doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;