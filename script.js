*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{

background:linear-gradient(135deg,#020617,#0f172a);
color:white;
font-family:'Poppins',sans-serif;
text-align:center;

}

header{

display:flex;
justify-content:space-between;
align-items:center;
padding:20px 10%;
background:rgba(255,255,255,0.05);
backdrop-filter:blur(10px);

}

.logo{

font-family:'Orbitron',sans-serif;
font-size:32px;
font-weight:900;
color:#00f7ff;
letter-spacing:2px;

}

nav a{

margin:0 15px;
text-decoration:none;
color:white;
font-weight:500;
transition:0.3s;

}

nav a:hover{

color:#00f7ff;

}

.hero{

padding:140px 20px;

}

.big-name{

font-family:'Orbitron',sans-serif;
font-size:80px;
font-weight:900;
color:#00f7ff;

text-shadow:
0 0 10px #00f7ff,
0 0 20px #00f7ff,
0 0 40px #00f7ff;

}

.typing{

margin-top:20px;
font-size:28px;
color:#67e8f9;

}

.subtitle{

margin-top:20px;
font-size:20px;
opacity:0.8;

}

.btn{

margin-top:40px;
padding:15px 40px;
font-size:18px;
border:none;
border-radius:30px;
background:#00f7ff;
color:black;
cursor:pointer;
transition:0.3s;

}

.btn:hover{

transform:scale(1.1);
box-shadow:0 0 20px #00f7ff;

}

section{

padding:100px 10%;

}

h2{

font-family:'Orbitron',sans-serif;
font-size:40px;
margin-bottom:30px;
color:#00f7ff;

}

.grid{

display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:25px;
margin-top:40px;

}

.card{

padding:35px;
background:rgba(255,255,255,0.05);
border-radius:15px;
transition:0.4s;

}

.card:hover{

transform:translateY(-10px);
background:#00f7ff;
color:black;

}

.github-btn{

display:inline-block;
margin-top:20px;
padding:15px 40px;
border-radius:30px;
background:#00f7ff;
color:black;
text-decoration:none;

}

footer{

padding:20px;
background:#020617;
margin-top:40px;

}
