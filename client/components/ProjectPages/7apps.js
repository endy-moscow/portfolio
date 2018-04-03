import React from 'react'
import Menu from '../menu/menu.jsx'
import Header from '../header/header.jsx'
import $ from 'jquery'
import './7apps.scss'

export default function SevenApps() {
  $(document).ready(function() {
            var $cloudsBig = $('.cloud-big-lc, .cloud-big2-lc, .cloud-big3-lc'),
                $cloudsSmall = $('.cloud-small-lc, .cloud-small2-lc, .cloud-small3-lc, .cloud-small4-lc, .cloud-small5-lc, .cloud-small6-lc')
            $cloudsBig.bind('animationend', function() {
                $(this).addClass('cloud-infinite-play-big-lc');
                console.log(1);
            });
            $cloudsSmall.bind('animationend', function() {
                $(this).addClass('cloud-infinite-play-small-lc');
                console.log(2);
            });
        });
  $(document).ready(function() {
            var $cloudsInsanity = $('.cloud1-insanity, .cloud2-insanity, .cloud3-insanity, .cloud4-insanity');
            $cloudsInsanity.bind('animationend', function() {
                $(this).addClass('cloud-insanity-infinite');
                console.log(3);
            });
        });
  $(document).ready(function() {
    var $hero1 = $('.hero3'),
                $hero2 = $('.hero4'),
                $hero3 = $('.hero1'),
                $hero4 = $('.hero2'),
                $cop1 = $('.cop1'),
                $cop2 = $('.cop2'),
                $herobox = $('.herobox'),
                $copbox = $('.copbox');

            var start_scene = function($hero, $cop) {
                $hero1.addClass('hidden');
                $hero2.addClass('hidden');
                $hero3.addClass('hidden');
                $hero4.addClass('hidden');
                $cop1.addClass('hidden');
                $cop2.addClass('hidden');
                $hero.removeClass('hidden').addClass('appearing');

                setTimeout(function() {
                    $hero.removeClass('appearing').addClass('standby');

                    setTimeout(function() {
                        $cop.removeClass('hidden').addClass('appearing');

                        setTimeout(function() {
                            $hero.removeClass('standby').addClass('alerted');

                            setTimeout(function() {
                                $cop.removeClass('appearing').addClass('running');
                                $copbox.addClass('cop-fly');

                                setTimeout(function() {
                                    $hero.removeClass('alerted').addClass('running');
                                    $herobox.addClass('hero-fly');

                                    setTimeout(function() {
                                        $hero.removeClass('running').addClass('hidden');
                                        $cop.removeClass('running').addClass('hidden');
                                        $herobox.removeClass('hero-fly');
                                        $copbox.removeClass('cop-fly');

                                        if ($hero == $hero1) {
                                            start_scene($hero2, $cop2);
                                        } else if ($hero == $hero2) {
                                            start_scene($hero3, $cop1);
                                        } else if ($hero == $hero3) {
                                            start_scene($hero4, $cop2);
                                        } else if ($hero == $hero4) {
                                            start_scene($hero1, $cop1);
                                        }
                                    }, 4000); // пауза между началом убегания героя и началом новой сцены
                                }, 300); // пауза между началом погони копа и началом убегания героя
                            }, 2000); // пауза между встревоженностью персонажа и началом погони копа
                        }, 1000); // пауза между появлением копа и встревоженностью персонажа
                    }, 2000); // пауза между концом появления героя и появлением копа
                }, 3000); // пауза между началом анимации и концом появления
            }
            start_scene($hero1, $cop1);
  })
  return (
    <div className='canvas'>
      <Menu/>
      <Header
        title='Серия анимированных web-баннеров для студии 7apps'
        bgImage='http://postpeople.ru/media/7apps/cover.jpg'/>
      <article className='7apps'>
        <div className='content_container'>
          <p>В начале 2016 года, я разрабатывал сайт студии 7apps. В данный момент сайт уже не поддерживается, но в BitBacket сохранилась его копия. Я не стал копировать сайт полностью — в нем не было ничего особенного, кроме баннеров.</p>
          <p>Эта работа, в первую очередь, примечательна с технической стороны, ведь весь front-end был сделан мной и это был мой первый более-менее серьезный опыт работы с jQuery.</p>
          <p>Баннеры адаптивные — попробуйте поиграть с шириной, чтобы увидить это.</p>
        </div>

        <div className='content_container'>
          <h2>Insanity!</h2>
          <p>Механика игры основана на старой казуалке, которую, по слухам, использовали для тренировки пилотов авиации.</p>
          <p>В Insanity! авторы добавили сюжет и изменили механику, ведь в оригинал действительно сложно продержаться больше 20 секунд. Можно попробовать поиграть в <a href='https://bugaga.net.ru/games/krasnyj-kvadrat'>первый попавшийся в поисковике пример</a></p>
          <p>Теперь вместо красного квадрата — герой. Причем его можно выбрать из нескольких десятков. А убегать кроме кирпичных блоков, нужно от полицейских. Но лучше просто попробовать, вот <a href='https://itunes.apple.com/us/app/insanity/id892935435?mt=8'>ссылка на Insanity! в AppStore</a></p>
        </div>

        <div className="insanity">
            <div className="stars-insanity"></div>
            <div className="stars2-insanity"></div>
            <div className="cloud1-insanity"></div>
            <div className="cloud2-insanity"></div>
            <div className="cloud3-insanity"></div>
            <div className="cloud4-insanity"></div>
            <div className="town-l"></div>
            <div className="town-r"></div>
            <div className="name-insanity"></div>
            <div className="wall"></div>
            <div className="dirt1"></div>
            <div className="dirt2"></div>
            <div className="dirt3"></div>
            <div className="dirt4"></div>
            <div className="dirt5"></div>
            <div className="blink"></div>
            <div className="blink-sanity"></div>
            <div className="stairs"></div>
            <div className="herobox">
                <div className="hero1 hidden"></div>
                <div className="hero2 hidden"></div>
                <div className="hero3 hidden"></div>
                <div className="hero4 hidden"></div>
            </div>
            <div className="copbox">
                <div className="cop1"></div>
                <div className="cop2"></div>
            </div>
        </div>
        <p className='p2'></p>

        <div className='content_container'>
          <section className='block'>
            <h2>Little Chef</h2>
            <p>Игра по принципу three-in-a-row про приключения маленького поворенка. Вот цитата от авторов со <a href='https://itunes.apple.com/ru/app/little-chef-match-3-puzzle-game/id1005555492?mt=8'>страницы игры в AppStore</a>:</p>
            <p className='quote'>
              Откройте мир ярких и увлекательных овощных
              приключений Литл Шефа! Отправляйтесь вмест
              е с ним на встречу вкусным приключениям и ароматным победам.
              Помогите поваренку достичь вершин кулин
              арного мастерства и преодолеть множество препятствий на своем пути.
            </p>
          </section>
        </div>
        <div className="littlechef">
          <div className="rainbow"></div>
          <div className="cloud-small-lc"></div>
          <div className="cloud-small2-lc"></div>
          <div className="cloud-small3-lc"></div>
          <div className="cloud-small4-lc"></div>
          <div className="cloud-small5-lc"></div>
          <div className="cloud-small6-lc"></div>
          <div className="planebox">
              <div className="plane"></div>
          </div>
          <div className="cloud-big-lc"></div>
          <div className="cloud-big2-lc"></div>
          <div className="cloud-big3-lc"></div>
          <div className="grass-fur"></div>
          <div className="hill"></div>
          <div className="hill-l"></div>
          <div className="hill-r"></div>
          <div className="hill-c"></div>
          <div className="grass-nearly"></div>
          <div className="hills-main"></div>
          <div className="name-lc"></div>
          <div className="hero-young"></div>
          <div className="hero-old"></div>
        </div>
        <p className='p2'></p>
        <section className='block'>
        <div className='content_container'>
            <h2>Cosmic <span className='grey'>(Рабочее название)</span></h2>
            <p>Игра про битву роботов против инопланетян так и не вышла. Зато все роботы и инопланетяне остались целы.</p>
        </div>
        </section>
        <div className="cosmic">
            <div className="stars"></div>
            <div className="raysbox">
                <div className="rays"></div>
            </div>
            <div className="planet-big"></div>
            <div className="planet-small"></div>
            <div className="robot"></div>
            <div className="black-hole"></div>
            <div className='ufobox'>
              <div className="ufo"></div>
            </div>
            <div className="namebox">
                <div className="nameback"></div>
                <div className="name"></div>
            </div>
        </div>
      </article>
    </div>);
}
