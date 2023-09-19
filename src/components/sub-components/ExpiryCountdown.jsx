import React, { useEffect, useState } from 'react';

function ExpiryCountdown({ expiryDate }) {
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    if (expiryDate !== null) {
      const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeDifference = expiryDate - currentTime;

        if (timeDifference <= 0) {
          clearInterval(interval);
          setRemainingTime("Expired");
        } else {
          const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
          setRemainingTime(`${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [expiryDate]);

  return (
    <>
      {remainingTime !== null ? remainingTime : "No expiry"}
    </>
  );
}

export default ExpiryCountdown;
