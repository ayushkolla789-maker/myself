*{
margin:0;
padding:0;
box-sizing:border-box;
scroll-behavior:smooth;
}

body{

background:#020617;
color:white;
font-family:'Poppins',sans-serif;
text-align:center;

}

/* particle background */

#particles{
position:fixed;
top:0;
left:0;
z-index:-1;
}

/* header */

header{

display:flex;
justify-content:space-between;
align-items:center;
padding:20px 10%;
background:rgba(255,255,255,0.05);
backdrop-filter:blur(10px);

}

.logo{

font-size:28px;
color:#00f7ff;

}

nav a{

margin:0 15px;
text-decoration:none;
color:white;
transition:0.3s;

}

nav a:hover{

color:#00f7ff;

}

/* hero */

.hero{

padding:140px 20px;

}

.name{

font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size:120px;

color:#00f7ff;

text-shadow:
0 0 10px #00f7ff,
0 0 30px #00f7ff,
0 0 60px #00f7ff;

}

.typing{

font-size:28px;
margin-top:20px;
color:#67e8f9;

}

.subtitle{

margin-top:15px;
opacity:0.8;

}

.btn{

margin-top:35px;
padding:15px 40px;
border-radius:30px;
border:none;
background:#00f7ff;
color:black;
font-size:18px;
cursor:pointer;

}

.btn:hover{

box-shadow:0 0 25px #00f7ff;
transform:scale(1.1);

}

/* sections */

section{

padding:100px 10%;

}

h2{

font-size:40px;
margin-bottom:30px;
color:#00f7ff;

}

/* cards */

.grid{

display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:25px;

}

.card{

padding:35px;
border-radius:15px;
background:rgba(255,255,255,0.05);
transition:0.4s;

}

.card:hover{

transform:translateY(-10px);
background:#00f7ff;
color:black;

}

/* skills */

.skill{

max-width:600px;
margin:auto;

}

.bar{

background:#1e293b;
height:10px;
border-radius:10px;
margin-bottom:25px;

}

.bar span{

display:block;
height:10px;
background:#00f7ff;
border-radius:10px;

}

/* github button */

.github-btn{

display:inline-block;
padding:15px 40px;
background:#00f7ff;
color:black;
border-radius:30px;
text-decoration:none;

}

footer{

margin-top:40px;
padding:20px;
background:#020617;

}
