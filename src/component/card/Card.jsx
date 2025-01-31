import React from 'react'
import styled from "styled-components"
import styles from "./Card.module.css"

const StyledCard = styled.div`
    position: relative;
    height: 500px;
    aspect-ratio: 1/1;
    border-radius: 20px;
    padding: 25px;
    background-image: url(${(props) => props.bg});
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
    background-color: rgba(0, 0, 0, 0.2);
    /* border: 1px solid black; */
    border-radius: 20px;
    padding: 20px;

`;

const StyledAvatar = styled.div`
    height: 40px;
    aspect-ratio: 1/1;
    border-radius: 50%;

    background-image: url(${(props) => props.avt});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

// const StyledLabel = styled.label`
//     color: white;
// `;

export default function Card({ props }) {
    return (
        <StyledCard bg={props.bg}>
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
                        <StyledAvatar avt={props.avatar}></StyledAvatar>
                        <h3 className={styles.whiteText}>@{props.author || "unknown"}</h3>
                    </div>
                    <h4 className={styles.whiteText}>2737</h4>
                </div>
                <label htmlFor="" className={styles.whiteText}>
                    {props.slogan || ""}
                </label>
            </StyledInfo>
        </StyledCard>
    )
}
