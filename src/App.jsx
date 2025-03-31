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
import UncheckedExam from "./Pages/UncheckedExam";
import SpeakingCheck from "./Pages/SpeakingCheck";
import WritingPerson from "./Components/ExamCheck/Writing/WritingPerson";
import SpeakingPerson from "./Components/ExamCheck/Speaking/SpeakingPerson";
import Reyting from "./Pages/Reyting";
import ReadingPart4 from "./Components/ExamInfo/ExamInfoReading/Parts/Part4/ReadingPart4";
import ReadingPart5 from "./Components/ExamInfo/ExamInfoReading/Parts/Part5/ReadingPart5";
import ExamInfoSpeaking from "./Pages/ExamInfoSpeaking";
import SpeakingPart2 from "./Components/ExamInfo/ExamInfoSpeaking/Parts/Part2/SpeakingPart2";
import SpeakingPart1 from "./Components/ExamInfo/ExamInfoSpeaking/Parts/Part1/SpeakingPart1";
import SpeakingPart3 from "./Components/ExamInfo/ExamInfoSpeaking/Parts/Part3/SpeakingPart3";
import WritingPart2 from "./Components/ExamInfo/ExamInfoWriting/Part/Part2/WritingPart2";
import SpeakingPart4 from "./Components/ExamInfo/ExamInfoSpeaking/Parts/Part4/SpeakingPart4";
import Price from "./Pages/Price";
import UncheckedExamInfo from "./Pages/UncheckedExamInfo";
import UncheckendExamCheck from "./Pages/UncheckendExamCheck";
import TeacherLogin from "./Pages/TeacherLogin";

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
          <Route path="/teacher/login" element={<TeacherLogin />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/admins" element={<Admins />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payments" element={<Payment />} />
              <Route path="/uncheckend/exam" element={<UncheckedExam />} />
              <Route path="/uncheckend/exam/:ID" element={<UncheckedExamInfo />} />
              <Route path="/uncheckend/exam/:ExamID/:SectionID" element={<UncheckendExamCheck />} />
              <Route path="/speaking/check" element={<SpeakingCheck />} />
              <Route path="/writing/check/person" element={<WritingPerson />} />
              <Route path="/speaking/check/person" element={<SpeakingPerson />} />
              <Route path="/reyting" element={<Reyting />} />
              <Route path="/price" element={<Price />} />

              <Route path="/exam" element={<Exam />} />
              <Route path="/exam/listening/:id" element={<ExamInfoLestinenig />} />
              {/* Listening Parts */}
              <Route path="/exam/listening/part/1/:id" element={<ListeningPart1 />} />
              <Route path="/exam/listening/part/2/:id" element={<ListeningPart2 />} />
              <Route path="/exam/listening/part/3/:id" element={<ListeningPart3 />} />
              <Route path="/exam/listening/part/4/:id" element={<ListeningPart4 />} />
              <Route path="/exam/listening/part/5/:id" element={<ListeningPart5 />} />
              <Route path="/exam/listening/part/6/:id" element={<ListeningPart6 />} />
              {/* Listening Parts */}
              <Route path="/exam/reading/:id" element={<ExamInfoReading />} />

              {/* Reading Parts */}
              <Route path="/exam/reading/part/1/:id" element={<ReadingPart1 />} />
              <Route path="/exam/reading/part/2/:id" element={<ReadingPart2 />} />
              <Route path="/exam/reading/part/3/:id" element={<ReadingPart3 />} />
              <Route path="/exam/reading/part/4/:id" element={<ReadingPart4 />} />
              <Route path="/exam/reading/part/5/:id" element={<ReadingPart5 />} />
              {/* Reading Parts */}
              <Route path="/exam/writing/:id" element={<ExamInfoWritnig />} />
              {/* Writing Parts */}
              <Route path="/exam/writing/part/1/:id" element={<WritingPart1 />} />
              <Route path="/exam/writing/part/2/:id" element={<WritingPart2 />} />
              {/* Writing Parts */}

              <Route path="/exam/speaking/:id" element={<ExamInfoSpeaking />} />

              <Route path="/exam/speaking/part/1/:id" element={<SpeakingPart1 />} />
              <Route path="/exam/speaking/part/2/:id" element={<SpeakingPart2 />} />
              <Route path="/exam/speaking/part/3/:id" element={<SpeakingPart3 />} />
              <Route path="/exam/speaking/part/4/:id" element={<SpeakingPart4 />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
