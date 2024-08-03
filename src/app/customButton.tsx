"use client";

export default function CustomButton(props: any) {
    return <div>
        <button onClick={props.clickCustom}>{props.buttonText}</button>
    </div>;
}