import React, { useEffect } from "react";
import Header from "../Header";
import TextInput from "../UI/TextInput";

function StudentsPage ({popupHidden, setPopupHidden}) {
    return(
        <div>
            <Header popupHidden={popupHidden} setPopupHidden={setPopupHidden}/>
 <div class="students_header">Участники Цифровой Платформы</div>
        <div class="student">
            <div class="left_panel">
        <TextInput type="text" placeholder="поиск..." />
                <div class="areaB"><input class='input_radio' type="radio" id="firstTag"/>
                    <label class='input_radio' for="firstTag">ML</label></div>
                <div class="areaC"><input class='input_radio' type="radio" id="secondTag"/>
                    <label class='input_radio' for="secondTag">Data Science</label></div>
            </div>
            <div class="right_panel">
                <div class="student_card">
                    <img class="student_image" src="assets/student.png" alt=""/>
                    <p class="student_name">Иван Иванов</p>
                </div>
                <div class="student_card">
                    <img class="student_image" src="assets/student.png" alt=""/>
                    <p class="student_name">Иван Иванов</p>
                </div>
                <div class="student_card">
                    <img class="student_image" src="assets/student.png" alt=""/>
                    <p class="student_name">Иван Иванов</p>
                </div>
                <div class="student_card">
                    <img class="student_image" src="assets/student.png" alt=""/>
                    <p class="student_name">Иван Иванов</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default StudentsPage;