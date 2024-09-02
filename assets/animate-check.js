document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("container-pesan").innerHTML += '<div class="message message-incoming" id="chat1"><p>Halo, bagaimana kabarmu hari ini?</p><span class="timestamp">09:30</span></div>'


    const chat1 = document.getElementById("chat1");
    const outg2 = document.getElementById("container_out1");
    const chat2 = document.getElementById("chat2")

    chat1.addEventListener('animationend', () => {
        document.getElementById("choose_point").classList.remove("d-none")
    });

    outg2.addEventListener('animationend', () => {
        document.getElementById("chat2").innerHTML = '<div class="message message-incoming" id="chat2"><p>Emm.... Sebelum mulai apakah aku boleh puter musik dulu?</p><span class="timestamp">09:32</span></div>'
    });

    chat2.addEventListener('animationend', () => {
        document.getElementById("container-pesan").insertAdjacentHTML('beforeend', '<div class="message message-incoming" id="chat2"><p>Sebelum kita lanjut, aku boleh puter lagu dulu ga nih?</p><span class="timestamp">09:32</span></div>')
    });
});