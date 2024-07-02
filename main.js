const dateTime = document.querySelector('.currenttimeline');
function updateTime(){
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        timeZone: 'UTC'
    }

    const time = {
        hour: '2-digit', minute: '2-digit', second: '2-digit', 
        timeZone: 'UTC'
    };

    const date = now.toLocaleDateString('en-US', options);

    const times = now.toLocaleTimeString('en-US', time);

    document.getElementById('date').innerText = `${date}`;
    document.getElementById('time').innerText = `${times}`;
}
updateTime();
setInterval(updateTime,1000);