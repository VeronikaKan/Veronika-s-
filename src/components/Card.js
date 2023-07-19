import React from 'react'

const Card = ({ info }) => {

    return (
        <div>
            <p>
                {
                    info.date
                }
            </p>
            <p>
                {
                    info.base
                }
            </p>

        </div>
    )
}

export default Card