import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  // Bollywood
  bollywood: any = [
    // tslint : diable -next-line : max-line-length
    {
      id:1,
      img:"https://files.prokerala.com/images/1200/shah-rukh-khan-unveils-besharam-rang-song-first-look_642859m.jpg",
      url: "https://pagalworld.com.se/files/download/id/65307",
      name: "Besharam Rang",
      artist: "Vishal Shekhar"
    },
    {
      id:3,
      img:"https://i.scdn.co/image/ab67616d0000b27344aa56e23e3a89802e6c6347",
      url: "https://pagalsong.in/uploads/systemuploads/mp3/Ra-One/Raftaarein%20-%20Ra-One%20128%20Kbps.mp3",
      name: "Raftaarein ",
      artist: "Shekhar Ravjiani and Vishal Dadlani"
    },
    {
      id:4,
      img:"https://i.scdn.co/image/ab67616d0000b27344aa56e23e3a89802e6c6347",
      url: "https://paglasongs.com/files/download/id/9432",
      name: "Bhare Naina - Raone",
      artist: "Nandini Srikar"
    },
    {
      id:5,
      img:"https://c.ndtvimg.com/2020-10/3pk6qsog_divya-khosla-kumar_625x300_06_October_20.jpg",
      url: "https://paglasongs.com/files/download/id/11508",
      name: "Meri Aankhon Mein ",
      artist: "Shreya Ghoshal"
    },
    {
      id:6,
      img:"https://c-fa.cdn.smule.com/rs-s80/arr/5c/c2/7005eb56-fbad-4e3d-ba2f-357a3cfda6e3_1024.jpg",
      url: "https://paglasongs.com/files/download/id/9922",
      name: "Haan Tu Hain - jannat",
      artist: "KK"
    },
    {
      id:7,
      img:"https://c.saavncdn.com/044/Deva-Deva-From-Brahmastra-Hindi-2022-20220812225424-500x500.jpg",
      url: "https://paglasongs.com/files/download/id/9135",
      name: "Deva Deva-Brahmastra",
      artist: "Arijit Singh & Jonita Gandhi"
    },
    {
      id:8,
      img:"https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_l_1658037089.jpg",
      url: "https://paglasongs.com/files/download/id/8781",
      name: "Kesariya-	Brahmastra",
      artist: "Arijit Singh"
    },
    
  ];
  // Bollywood

  // Punjabi
  punjabi: any = [
    {
      id:1,
      img:"https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-91874559/91874559.jpg",
      url: "https://pagalworld.com.se/files/download/id/7114",
      name: "Selfmade",
      artist: "Siddhu Moosewala"
    },
    {
      id:2,
      img:"https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-91874559/91874559.jpg",
      url: " https://pagalworld.com.se/files/download/id/7119",
      name: "Legend",
      artist: "Siddhu Moosewala"
    },
    {
      id:3,
      img:"https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-91874559/91874559.jpg",
      url: "https://pagalworld.com.se/files/download/id/2934",
      name: "Calaboose",
      artist: "Siddhu Moosewala"
    },
    {
      id:4,
      img:"https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-91874559/91874559.jpg",
      url: "https://pagalworld.com.se/files/download/id/3081",
      name: "Power",
      artist: "Siddhu Moosewala"
    },
    {
      id:5,
      img:"https://kiddaan.com/wp-content/uploads/2022/02/no-love-lyrics.jpg",
      url: "https://pwdown.info/113510/NO%20LOVE%20-%20Shubh.mp3",
      name: "No Love",
      artist: "Shubh"
    },
    {
      id:6,
      img:"https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-91874559/91874559.jpg",
      url: "https://pagalworld.com.se/files/download/id/3116",
      name: "Goat",
      artist: "Siddhu Moosewala"
    },
    {
      id:7,
      img:"https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-91874559/91874559.jpg",
      url: "https://pagalworld.com.se/files/download/id/2995",
      name: "295",
      artist: "Siddhu Moosewala Moosewala"
    },
    {
      id:8,
      img:"https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-91874559/91874559.jpg",
      url: "https://pagalworld.com.se/files/download/id/7117",
      name: "Devil ",
      artist: "Siddhu Moosewala Moosewala"
    }
  ];
  // Punjabi

  // Marathi
  marathi: any = [
    {
      id:1,
      img:"https://c.saavncdn.com/180/Sher-Shivraj-Marathi-2022-20220422095918-500x500.jpg",
      url: "https://paglasongs.com/files/download/id/6222",
      name: "Shwasat Raja Dhyasat Raja - PawanKhind",
      artist: "Avadhoot Gandhi, Chorus"
    },
    {
      id:2,
      img:"https://c.saavncdn.com/180/Sher-Shivraj-Marathi-2022-20220422095918-500x500.jpg",
      url: "https://paglasongs.com/files/download/id/7028",
      name: "Shivba Raja - Sher Shivraj",
      artist: "Manish Rajgire"
    }, 
    {
      id:3,
      img:"https://bollyy.com/wp-content/uploads/2022/10/Baji-Ran-Baji-Ran-4.jpg",
      url: "https://paglasongs.com/files/download/id/11498",
      name: "Baaji Ra - HarHar Mahadev",
      artist: "Manish Rajgire"
    },  
    {
      id:4,
      img:"https://i.ytimg.com/vi/SQCYv2uQ8io/maxresdefault.jpg",
      url: "https://paglasongs.com/files/download/id/3400",
      name: "Apli Yarri - Yaari",
      artist: "Adarsh Shinde, Sonali Sonawane"
    }
  ];
  // Marathi

  // SouthIndian
  southindian: any = [
    {
      id:1,
      img:"https://cdn.gulte.com/wp-content/uploads/2021/12/sam-1.jpg",
      url: "https://paglasongs.com/files/download/id/6262",
      name: "Oh Antava - Pushpa the Rise",
      artist: "Indravathi Chauhan"
    },
    {
      id:2,
      img:"https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2021/10/26/Sami-Sami-Song-HD-poster-from-Pushpa-The-Rise-movie-.jpg?quality=80&zoom=1&ssl=1",
      url: "https://paglasongs.com/files/download/id/7394",
      name: "Sami Sami - Pushpa the Rise",
      artist: "Mounika Yadav"
    },
    {
      id:3,
      img:"https://pbs.twimg.com/media/FOWb9bFaAAIiweM?format=jpg&name=small",
      url: "https://paglasongs.com/files/download/id/7239",
      name: "Toofan (KGF 2)",
      artist: "Brijesh Shandilya, Mohan Krishna"
    },
    {
      id:4,
      img:"https://www.pinkvilla.com/imageresize/mehabooba_song_.jpg?width=752&t=pvorg",
      url: "https://paglasongs.com/files/download/id/7390",
      name: "Mehbooba- KGF2",
      artist: "Ananya Bhat"
    },
  ];
  // SouthIndian

  // WorldWide
  worldwide: any = [];
  // WorldWide

  // getfile 1
  getFilesB() {
    return of(this.bollywood);
  }

  // getfile 2
  getFilesP() {
    return of(this.punjabi);
  }

  // getfile 3
  getFilesM() {
    return of(this.marathi);
  }

  // getfile 4
  getFilesS() {
    return of(this.southindian);
  }

  // getfile 5
  getFilesW() {
    return of(this.worldwide);
  }


  constructor() { }
}
