import React from "react";

const students = [
    {
        id: 1,
        name: "인제",
    },
    {
        id: 2,
        name: "스티브",
    },
    {
        id: 3,
        name: "빌",
    },
    {
        id: 4,
        name: "제프",
    },
];

function AttendenceBook(porops) {
    return (
        <ul>
            {students.map((students) => {
                return <li key={`student-id-${students.id}`}>{students.name}</li>
            })}
        </ul>
    )
}

export default AttendenceBook;