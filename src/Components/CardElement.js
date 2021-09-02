import React from 'react'

export default function CardElement(props) {
    return (
        <div>
            <div onClick={() => { props.onHandleFlip(props.card) }} id={props.card.id} className={`card ${props.card.flipped ? "flip" : ""}`}>
                <div className="card_front">
                    <img src={`assets/images/${props.card.icon}.png`}
                        alt={props.card.icon}
                        className="icon" />
                </div>
                <div className="card_back">
                    {"</>"}
                </div>
            </div>

        </div>
    )
}
