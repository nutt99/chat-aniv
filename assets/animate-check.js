document.addEventListener('DOMContentLoaded', (event) => {


    const chat1 = document.getElementById("chat1");

    const container_out2 = document.getElementById("container_out2")
    
    const chat21 = document.getElementById("chat2-1");
    const chat22 = document.getElementById("chat2-2");

    chat1.addEventListener('animationend', () => {
        document.getElementById("choose_point").classList.remove("d-none")
    });

    container_out2.addEventListener('animationend', () => {
        document.getElementById("choose_point2").classList.remove("d-none");
    })

    // outg2.addEventListener('animationend', () => {
    //     document.getElementById("chat2").innerHTML = '<div class="message message-incoming" id="chat2"><p>Emm.... Sebelum mulai apakah aku boleh puter musik dulu?</p><span class="timestamp">09:32</span></div>'
    // });
});