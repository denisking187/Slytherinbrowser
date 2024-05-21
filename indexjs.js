<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Slytherin.png">
    <title>SlytherinBrowser</title>
    <link rel="stylesheet" href="indexcss.css">
</head>

<body>

    <div id="topBar" onclick="showCurrentTime()">&#9202;</div>
    <img id="logo" src="Slytherin.png"></img>

    <form id="searchForm" onsubmit="searchSlytherinBrowser(); return false;">
        <label for="search">SlytherinBrowser:</label>
       <input type="search" id="search" name="search" placeholder="Vnesite iskalni pojem..." oninput="checkForRotation(); checkForReminder();">

        <input type="submit" id="submitBtn" value="Išči">
    </form>

    <img id="logo" src="Slytherin.png"></img>

      <div id="dock">
          <a href="https://chat.openai.com/" target="load.html" class="icon" style="background-image: url('chatgpt.png');"></a>
          <a href="https://drive.google.com/" class="icon" target="load.html" style="background-image: url('drive.png');"></a>
          <a href="https://mail.google.com/" class="icon" target="load.html" style="background-image: url('gmail.png');"></a>
          <a href="https://www.youtube.com/" class="icon" target="load.html" style="background-image: url('yt.png');"></a>
      </div>
<div>
<div class="taskbar-icon" onclick="toggleCalendar()">
    <!-- SVG ikona (npr. ikona koledarja) -->
    <svg viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-7h3v3h-3v-3zm1-9c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2v.17l1.59 1.59 1.42-1.42L12 6.17V5c0-2.21-1.79-4-4-4s-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2v.17l3.59 3.59 1.42-1.42L12 6.17V5c0-2.21-1.79-4-4-4z"/>
    </svg>
</div>

<div class="calendar-container" id="calendar">
    <div class="calendar-header">
        <button onclick="toggleCalendar()">&#10005;</button>
        <h2 id="month-year"></h2>
        <button onclick="previousMonth()">&#8249;</button>
        <button onclick="nextMonth()">&#8250;</button>
    </div>
    <div class="calendar-body" id="calendar-body"></div>
</div>
</div>
 <button id="menu"onclick="menuking()">MENU</button>
  <div id="trigger-button" class="trigger-button" onclick="toggleCalculator()">Calc</div>
   <div class="calculator-container" id="calculator-container" style="display:none;">
    <button id="al">?</button>
    <input type="text" id="display" readonly>
    <div>
        <label for="aa">Izberi iz:</label>
<select id="aa">
    <option value="decimal">Decimal</option>
    <option value="binary">Binary</option>
    <option value="octal">Octal</option>
    <option value="hex">Hex</option>
    <option value="3">Base 3</option>
    <option value="4">Base 4</option>
    <option value="5">Base 5</option>
    <option value="6">Base 6</option>
    <option value="7">Base 7</option>
    <option value="9">Base 9</option>
</select>

<div>
    <label for="bb">Pretvori v:</label>
    <select id="bb">
        <option value="decimal">Decimal</option>
        <option value="binary">Binary</option>
        <option value="octal">Octal</option>
        <option value="hex">Hex</option>
        <option value="3">Base 3</option>
        <option value="4">Base 4</option>
        <option value="5">Base 5</option>
        <option value="6">Base 6</option>
        <option value="7">Base 7</option>
        <option value="9">Base 9</option>
    </select>
</div>
<button onclick="convert()">Pretvori</button>
<button onclick="clearDisplay()">Počisti</button>
</div>

    <script src="indexjs.js"></script>
</body>
</html>
