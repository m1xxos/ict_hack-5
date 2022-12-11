import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../Header";
import ItmoButton from "../ItmoButton";
import LoginPopup from "../LoginPopup";
import styles from './homePage.module.scss'

function HomePage({popupHidden, setPopupHidden}) {
    const navigate = useNavigate()

    return (
        <>
        <div>
            <Header popupHidden={popupHidden} setPopupHidden={setPopupHidden}/>
            <div className={styles.container_slider_css}>
                <img className={styles.photo_slider_css} src="assets/firstt.png" alt="" />
                <img className={styles.photo_slider_css} src="assets/first.png" alt="" />
                <img className={styles.photo_slider_css} src="assets/second.png" alt="" />
                <img className={styles.photo_slider_css} src="assets/fourth.png" alt="" />
            </div>
            <div class={styles.text_main}>Хочешь, чтобы твой проект поддержали ведущие компании?</div>
            <div style={{ height: "80px" }}>
                <button class={styles.button_main} onClick={() => navigate("/registration")}>регистрируйся</button>
                <button class={styles.button_main}>подавай заявку</button>
                <button class={styles.button_main}>жди инвестиций</button>
            </div>
            <div class={styles.text_main}>Нужна команда для реализации проекта?</div>
            <div class={styles.participants_main}>
                <div class={styles.participants_text}>Участники Цифровой Платформы:</div>
                <div><img class={styles.image} src="assets/0cecef2590141d5084e6ed03652bd41b.jpg" alt="" /></div>
                <div><img class={styles.image} src="assets/0cecef2590141d5084e6ed03652bd41b.jpg" alt="" /></div>
                <div><img class={styles.image} src="assets/0cecef2590141d5084e6ed03652bd41b.jpg" alt="" /></div>
                <div><img class={styles.image} src="assets/0cecef2590141d5084e6ed03652bd41b.jpg" alt="" /></div>
                <div><img class={styles.image} src="assets/0cecef2590141d5084e6ed03652bd41b.jpg" alt="" /></div>
                <button class={styles.studentsButton} onClick={() => navigate('/students')}><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg></button>
            </div>
        </div>
        </>
    )
}

export default HomePage;