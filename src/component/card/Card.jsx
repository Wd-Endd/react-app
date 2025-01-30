import React from 'react'
import styled from "styled-components"
import styles from "./Card.module.css"

const StyledCard = styled.div`
    position: relative;
    height: 500px;
    aspect-ratio: 1/1;
    border-radius: 20px;
    margin: 20px;
    padding: 25px;
    background-image: url(https://w0.peakpx.com/wallpaper/196/579/HD-wallpaper-whale-in-the-sky-whale-in-stars-stars-sky-night-milky-star-lights-skies-clouds.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
`;

// const StyledBg = styled.div`
//     height: 500px;
//     aspect-ratio: 1/1;
//     border-radius: 20px;

//     background-image: url(https://w0.peakpx.com/wallpaper/196/579/HD-wallpaper-whale-in-the-sky-whale-in-stars-stars-sky-night-milky-star-lights-skies-clouds.jpg);
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
// `;

const StyledInfo = styled.div`
    position: absolute;
    top: 70%;
    /* left: 0; */

    /* transform: translateX(-50%); */
    width: fit-content;
    height: cover;
    margin-right: 25px;

    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.1);
    /* border: 1px solid black; */
    border-radius: 20px;
    padding: 20px;

`;

const StyledAvatar = styled.div`
    height: 40px;
    aspect-ratio: 1/1;
    border-radius: 50%;

    background-image: url(https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474092Pvt/anh-avatar-chill-lofi-cuc-dep_021443523.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

// const StyledLabel = styled.label`
//     color: white;
// `;

export default function Card() {
    return (
        <StyledCard>
            {/* <StyledBg src="https://wallpapersok.com/images/high/chill-anime-cloudy-sky-eif0wrbsj7tavmd0.webp" alt="" /> */}
            {/* <StyledBg></StyledBg> */}
            <StyledInfo>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",

                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px"
                    }}>
                        <StyledAvatar></StyledAvatar>
                        <h3 className={styles.whiteText}>@Endd</h3>
                    </div>
                    <h4 className={styles.whiteText}>2737</h4>
                </div>
                <label htmlFor="" className={styles.whiteText}>
                    "Hẵy làm với tất cả đam mê và sự tận hưởng, bởi giá trị không chỉ nằm ở kết quả, mà còn trong từng khoảnh khắc bạn hòa mình vào hành trình."
                </label>
            </StyledInfo>
        </StyledCard>
    )
}
