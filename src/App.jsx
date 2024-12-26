import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Exam from "./Pages/Exam";
import ExamInfoLestinenig from "./Pages/ExamInfoLestinenig";
import ListeningPart1 from "./Components/ExamInfo/ExamInfoListening/Parts/Part1/ListeningPart1";
import ListeningPart2 from "./Components/ExamInfo/ExamInfoListening/Parts/Part2/ListeningPart2";
import ListeningPart3 from "./Components/ExamInfo/ExamInfoListening/Parts/Part3/ListeningPart3";
import ListeningPart4 from "./Components/ExamInfo/ExamInfoListening/Parts/Part4/ListeningPart4";
import ListeningPart5 from "./Components/ExamInfo/ExamInfoListening/Parts/Part5/ListeningPart5";
import ListeningPart6 from "./Components/ExamInfo/ExamInfoListening/Parts/Part6/ListeningPart6";
import ExamInfoReading from "./Pages/ExamInfoReading";
import ReadingPart1 from "./Components/ExamInfo/ExamInfoReading/Parts/Part1/ReadingPart1";
import ReadingPart2 from "./Components/ExamInfo/ExamInfoReading/Parts/Part2/ReadingPart2";
import Admins from "./Pages/Admins";
import ReadingPart3 from "./Components/ExamInfo/ExamInfoReading/Parts/Part3/ReadingPart3";
import ExamInfoWritnig from "./Pages/ExamInfoWriting";
import WritingPart1 from "./Components/ExamInfo/ExamInfoWriting/Part/Part1/WritingPart1";
import Profile from "./Pages/Profile";
import Payment from "./Pages/Payment";
import WritingCheck from "./Pages/WritingCheck";
import SpeakingCheck from "./Pages/SpeakingCheck";
import WritingPerson from "./Components/ExamCheck/Writing/WritingPerson";
import SpeakingPerson from "./Components/ExamCheck/Speaking/SpeakingPerson";
import Reyting from "./Pages/Reyting";
import ReadingPart4 from "./Components/ExamInfo/ExamInfoReading/Parts/Part4/ReadingPart4";
import ReadingPart5 from "./Components/ExamInfo/ExamInfoReading/Parts/Part5/ReadingPart5";
import ExamInfoSpeaking from "./Pages/ExamInfoSpeaking";
import SpeakingPart2 from "./Components/ExamInfo/ExamInfoSpeaking/Parts/Part2/SpeakingPart2";
import SpeakingPart1 from "./Components/ExamInfo/ExamInfoSpeaking/Parts/Part1/SpeakingPart1";
import SpeakingPart1_2 from "./Components/ExamInfo/ExamInfoSpeaking/Parts/Part1/SpeakingPart1_2";
import SpeakingPart3 from "./Components/ExamInfo/ExamInfoSpeaking/Parts/Part3/SpeakingPart3";

function ProtectedRoute() {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, [token]);

  return token ? <Outlet /> : null;
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/admins" element={<Admins />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payments" element={<Payment />} />
              <Route path="/writing/check" element={<WritingCheck />} />
              <Route path="/speaking/check" element={<SpeakingCheck />} />
              <Route path="/writing/check/person" element={<WritingPerson />} />
              <Route path="/speaking/check/person" element={<SpeakingPerson />} />
              <Route path="/reyting" element={<Reyting />} />

              <Route path="/exam" element={<Exam />} />
              <Route path="/exam/1/:id" element={<ExamInfoLestinenig />} />
              {/* Listening Parts */}
              <Route path="/exam/1/listening/part_1" element={<ListeningPart1 />} />
              <Route path="/exam/1/listening/part_2" element={<ListeningPart2 />} />
              <Route path="/exam/1/listening/part_3" element={<ListeningPart3 />} />
              <Route path="/exam/1/listening/part_4" element={<ListeningPart4 />} />
              <Route path="/exam/1/listening/part_5" element={<ListeningPart5 />} />
              <Route path="/exam/1/listening/part_6" element={<ListeningPart6 />} />
              {/* Listening Parts */}
              <Route path="/exam/1/reading" element={<ExamInfoReading />} />

              {/* Reading Parts */}
              <Route path="/exam/1/reading/part_1" element={<ReadingPart1 />} />
              <Route path="/exam/1/reading/part_2" element={<ReadingPart2 />} />
              <Route path="/exam/1/reading/part_3" element={<ReadingPart3 />} />
              <Route path="/exam/1/reading/part_4" element={<ReadingPart4 />} />
              <Route path="/exam/1/reading/part_5" element={<ReadingPart5 />} />
              {/* Reading Parts */}
              <Route path="/exam/1/writing" element={<ExamInfoWritnig />} />
              {/* Writing Parts */}
              <Route path="/exam/1/writing/part_1" element={<WritingPart1 />} />
              {/* Writing Parts */}

              <Route path="/exam/1/speaking" element={<ExamInfoSpeaking />} />

              <Route path="/exam/1/speaking/part_1" element={<SpeakingPart1 />} />
              <Route path="/exam/1/speaking/part_1.2" element={<SpeakingPart1_2 />} />
              <Route path="/exam/1/speaking/part_2" element={<SpeakingPart2 />} />
              <Route path="/exam/1/speaking/part_3" element={<SpeakingPart3 />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
