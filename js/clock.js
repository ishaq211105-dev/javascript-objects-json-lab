
(function(){

    console.info("hello JS");
    const myNode = document.createElement("clock");
    const digitalClock = document.getElementById("digitalClock")
    const secondHand = document.getElementById("secondHand");
    const minHand = document.getElementById("minHand");
    const hrHand = document.getElementById("hrHand");

    hrHand.style.changeColour = ('044')
    digitalClock.appendChild(myNode);
    const myDate = new Date();
    console.dir(myDate)
    myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { timeStyle: "medium" });
    const updateTime =function(){
        console.info('ticktock')
        const myDate = new Date();
        const seconds = myDate.getSeconds();
        const rotSeconds = seconds * 6 - 90;
        secondHand.style.transform = `rotate(${rotSeconds}deg)`;
        const minutes = myDate.getMinutes();
        const rotMinutes = minutes * 6 - 90;
        minHand.style.transform = `rotate(${rotMinutes}deg)`;
        let hours = myDate.getHours();
        hours = hours + minutes / 60; 
        const rotHours = hours * 30 - 90
        hrHand.style.transform = `rotate(${rotHours}deg)`;
        myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { timeStyle: "medium" });
    }
    setInterval(updateTime, 1000);
    updateTime();
      

})();