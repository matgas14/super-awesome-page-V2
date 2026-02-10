import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Contact {
  // Global contact info
  cvLink = '/documents/CV-Matej-Gaspert-2025.pdf';
  email = 'matejgaspert23@gmail.com';
  linkedin = 'https://www.linkedin.com/in/matgas14/';

  cards = [
    {
      id: 1,
      img: '/profile.jpg',
      title: 'Matej Gašpert',
      subtitle: 'software developer',
      bio: `Full-stack developer with 5 years of experience developing and maintaining responsive front-end websites with complex back-end servers, focusing on webshops, CRM’s, and custom internal management software. Experienced with HTML, CSS and JS Frameworks, with knowledge of UX and user psychology, as well as debugging and testing. Open to learning new technologies and looking to continue my career in web development and related IT areas. Able to effectively self-manage during independent projects, as well as collaborate in a team setting, and lead others to function in a team. From Croatia, Europe.`
    },
    {
      id: 2,
      img: '/ps.jpg',
      title: 'Free Time',
      subtitle: 'gaming enthusiast & outdoorsman',
      bio: `Besides professional careers, I enjoy spending my free time dabbling in various video games and board games, as well as spending time outdoors like camping, hiking, chopping wood, or building campfires. My competitive games experience ranges far and wide; from classics such as Age of Empires II and Command & Conquer, to newer titles like Fortnite and NBA 2K26. My taste in video games knows no limits – I enjoy all kinds of genres: RPG, FPS, grand strategy, action, racing, simulation, open-world, casual – you name it, I played it. My recent years have been filled with board game nights as well – I invite anyone in Zagreb to come join the club: Meeple's Corner – enjoy many games, meet new people, and experience the board game community in Zagreb!`
    },
    {
      id: 3,
      img: '/basketball.jpg',
      title: 'The Past',
      subtitle: 'Before Programming',
      bio: `Before programming, I played basketball at the top levels in the world. I started playing in Uskok, Rijeka, Croatia and moved to Zagreb in pursuit of basketball, to play for KK Cedevita. After high school, I moved to Texas, USA, to participate in the NJCAA and NCAA leagues. I played there for 4 years and graduated with a BA in computer science from St. Mary's University, San Antonio, TX. After college, I moved back to Europe and started my next steps locally in KK Zabok, Croatia, but soon suffered a back injury which ended my professional basketball career.`
    }
  ];


}
