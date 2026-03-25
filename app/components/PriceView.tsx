import React from 'react'

interface Props {
    price: number | undefined;
    className?: string;
}

const PriceView = ({price, className}: Props) => {
  return (
    <div>
        <div>
            <span>₦ {price}.00</span>
        </div>
    </div>
  )
}

export default PriceView