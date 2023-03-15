import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
 
    player.on('play', function() {
        console.log('played the video!');
         
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.on('timeupdate', throttle (savedCurrentTime, 1000));
    
    function savedCurrentTime(data) {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
    }

   openCurrentTime();
    
    function openCurrentTime(){
        const objectOfCurrentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
        
        if(objectOfCurrentTime){
            const currentTime = objectOfCurrentTime['seconds'];
            console.log(currentTime);
            player.setCurrentTime(currentTime).then(function(seconds) {
               
            }).catch(function(error) {
                switch (error.name) {
                    case 'RangeError':
                       
                        break;
            
                    default:
                       
                        break;
                }
            });
        }
    }