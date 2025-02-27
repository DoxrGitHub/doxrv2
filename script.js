const pfpImage = document.querySelector('.pfpimage');

function changecolor(hex) {

  const bgname = document.getElementById("bgname");

  bgname.style.transition = "color 0.3s ease-in-out";
  bgname.style.color = hex;

}

const images = {
  doxrdiscord: 'discord.webp',
  doxrgithub: 'github.webp',
  doxrgitlab: 'gitlab.webp',
  doxrspotify: 'spotify.svg',
  default: 'https://avatars.githubusercontent.com/u/132623420?v=4'
};

const colors = {
  doxrdiscord: 'rgba(96, 100, 244, 0.3)',
  doxrgithub: 'rgba(118, 109, 156, 0.3)',
  doxrgitlab: 'rgba(255, 110, 80, 0.4)',
  doxrspotify: 'rgba(29, 185, 84, 0.3)',
  default: 'rgba(182, 182, 182, 0.3)'
};


// fading
document.querySelectorAll('.doxrgithub, .doxrgitlab, .doxrdiscord, .doxrspotify').forEach(element => {
  element.addEventListener('mouseenter', () => {
    const brand = element.classList[0];
      pfpImage.style.opacity = 0;
    

    setTimeout(() => {
      changecolor(colors[brand])
      pfpImage.src = images[brand] || images.default;
      pfpImage.style.opacity = 1;
    }, 200);
  });

  element.addEventListener('mouseleave', () => {
    pfpImage.style.opacity = 0;

    setTimeout(() => {
      changecolor(colors["default"])

      pfpImage.src = images.default;
      pfpImage.style.opacity = 1;
    }, 200);
  });
});

//swapping
document.querySelectorAll('.doxrgithub, .doxrgitlab, .doxrdiscord, .doxrspotify').forEach(element => {
  element.onclick = () => {
    if (element.classList.contains('doxrgithub')) {
      window.location.href = 'https://github.com/DoxrGitHub?tab=repositories';

    } else if (element.classList.contains('doxrgitlab')) {
      window.location.href = 'https://gitlab.com/doxrgitlab/';
    } else if (element.classList.contains('doxrdiscord')) {
      window.location.href = 'https://discord.com/users/1162193398879502336';
    } else if (element.classList.contains('doxrspotify')) {
      window.location.href = 'https://open.spotify.com/user/31gcrb5ld7t6dwfyxyzzklsakntm';
    }
  };
});