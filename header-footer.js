window.onload = function() {
    document.getElementById("header").innerHTML = `
        <img src="images/header.jpg" class='header-image'></img>
        <table align="center" class='header-table'>
            <tr>
                <td id='link1'><a href="index.html">Home</a></td>
                <td id='link3'><a href="resume.html">Resumé, Cover Letter, Job Posting</a></td>
                <td id='link4'><a href="videos.html">Videos</a></td>
                <td id='link5'><a href="robotics.html">Robotics</a></td>
            </tr>
        </table>
    `
    document.getElementById("footer").innerHTML = `
    <br /><br />
    <footer style="display: block">
        <hr />
        &copy; 2019 by Longman Xu. All rights reserved.<br />
        This website was made for the TEJ4M0 class at The Woodlands School by Longman Xu.<br />
        Email: <a href="mailto:668520@pdsb.net">668520@pdsb.net</a> | Phone: 905-279-0575
        <table align="center" class='header-table'>
            <tr>
                
            </tr>
        </table>
    </footer>
`
}