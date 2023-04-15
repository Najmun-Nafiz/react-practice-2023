import React from 'react'

const userData = [
    {
        "name": "Najmun Nafiz",
        "age": 22,
        "phone": [
            {
                "home": "01799646660",
                "address": "Pabna"
            },
            {
                "home": "01799646661",
                "address": "Atghoria"
            }
        ]
    },
    {
        "name": "Anamul Hasan",
        "age": 12,
        "phone": [
            {
                "home": "01799646550",
                "address": "Cahtmohor"
            },
            {
                "home": "01799645561",
                "address": "Bera"
            },
        ]
    },
    {
        "name": "Arif Hossain",
        "age": 25,
        "phone": [
            {
                "home": "01799646699",
                "address": "Sadar"
            },
            {
                "home": "01799646681",
                "address": "Lalpu"
            },
        ]
    },
]


function Nested() {
    return (
            <div>
                {
                    userData.map((singleUser, index) =>
                        <div key={index}>
                            <h4>{singleUser.name}</h4>
                            <p>{singleUser.age}</p>

                            {
                                singleUser.phone.map((singlePhone, index1) => 
                                    <div key={index1}>
                                        <p>{singlePhone.home}</p>
                                        <p>{singlePhone.address}</p>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        );
    }

export default Nested