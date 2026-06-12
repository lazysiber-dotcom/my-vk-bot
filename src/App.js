import React, { useState } from 'react';

// ========== ПОДКЛЮЧАЕМ ФОТОГРАФИИ ==========
import nevskyImg from './image/nevsky.jpg';
import gagarinImg from './image/gagarin.jpg';
import lisaImg from './image/lisa.jpg';
import korolevImg from './image/korolev.jpg';
import zoyaImg from './image/zoya.jpg';
import lomonosovImg from './image/lomonosov.jpg';
import volunteerImg from './image/volunteer.jpg';
import petr1Img from './image/petr1.jpg';
import pirogovImg from './image/pirogov.jpg';
import suvorovImg from './image/suvorov.jpg';

// ========== ВАШИ 10 КАРТОЧЕК ==========
const CARDS = [
  {
    id: 1,
    name: 'Александр Невский',
    quality: 'Ответственность',
    description: 'Защитил границы Руси и сохранил её культурную идентичность',
    task: 'Стань ответственным за чистоту на детской площадке в своём дворе или организуй соседей-сверстников для проведения дворового турнира',
    image: nevskyImg,
  },
  {
    id: 2,
    name: 'Юрий Гагарин',
    quality: 'Смелость',
    description: 'Первый человек, преодолевший страх перед неизвестностью космоса',
    task: 'Попробуй себя в новом виде спорта или деятельности, которой раньше боялся (скалолазание, публичное выступление в парке, запись первого видео-блога)',
    image: gagarinImg,
  },
  {
    id: 3,
    name: 'Доктор Лиза (Елизавета Глинка)',
    quality: 'Сострадание (Милосердие)',
    description: 'Посвятила жизнь помощи самым беззащитным в зонах конфликтов',
    task: 'Окажи реальную помощь человеку, который в ней нуждается (соседу, младшему школьнику или волонтёрскому фонду)',
    image: lisaImg,
  },
  {
    id: 4,
    name: 'Сергей Королёв',
    quality: 'Настойчивость',
    description: 'Несмотря на трудности и неудачи, создал космическую программу СССР',
    task: 'Доведи до конца сложное дело, которое ты планировал забросить на этой неделе',
    image: korolevImg,
  },
  {
    id: 5,
    name: 'Зоя Космодемьянская',
    quality: 'Стойкость',
    description: 'Проявила невероятную силу духа перед лицом врага',
    task: 'Сделай сегодня то, что требует силы воли: прими контрастный душ, пробеги лишнюю круговую тренировку или откажись от сладкого/гаджета на целый день',
    image: zoyaImg,
  },
  {
    id: 6,
    name: 'Михаил Ломоносов',
    quality: 'Целеустремлённость',
    description: 'Прошёл пешком сотни километров ради знаний, став первым крупным русским учёным-естествоиспытателем',
    task: 'Самостоятельно изучи историю одного памятного места в твоём городе, о котором мало кто знает, и нанеси его на карту проекта «МестоПамяти.РФ»',
    image: lomonosovImg,
  },
  {
    id: 7,
    name: 'Современный волонтёр',
    quality: 'Альтруизм',
    description: 'Ежедневно бескорыстно помогает людям, животным или природе в наше время',
    task: 'Присоединись к экологической акции по очистке местного водоёма или леса от мусора. Зафиксируй результат и выложи отчёт в VK, вдохновив других',
    image: volunteerImg,
  },
  {
    id: 8,
    name: 'Пётр I',
    quality: 'Мастерство',
    description: 'Реформировал страну, лично освоив десятки ремёсел',
    task: 'Освой новое ремесло или ручной труд. Построй скворечник, отремонтируй велосипед или создай что-то полезное для дома своими руками',
    image: petr1Img,
  },
  {
    id: 9,
    name: 'Николай Пирогов',
    quality: 'Служение',
    description: 'Основоположник военно-полевой хирургии, спас тысячи жизней, работая в тяжелейших условиях',
    task: 'Пройди онлайн-курс или мастер-класс по оказанию первой помощи в летних условиях (солнечный удар, порезы) и поделись знаниями с друзьями',
    image: pirogovImg,
  },
  {
    id: 10,
    name: 'Александр Суворов',
    quality: 'Дисциплина',
    description: 'Великий полководец, не проигравший ни одного сражения, заботившийся о каждом солдате',
    task: 'Объяви себе «цифровой устав» до конца дня. Пока ты не выполнишь все свои главные обязанности, телефон лежит в другой комнате или с выключенными уведомлениями.',
    image: suvorovImg,
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [title, setTitle] = useState(null); // null, 'heir', 'hero'

  const handleComplete = () => {
    let newScore = score + 10;
    let newTitle = title;
    
    // Проверяем достижение 300 очков (Герой нашего времени)
    if (newScore >= 300 && title !== 'hero') {
      newTitle = 'hero';
      alert('⭐ ПОЗДРАВЛЯЮ! Ты — Герой нашего времени! ⭐');
    }
    // Проверяем достижение 100 очков (Наследник победителей)
    else if (newScore >= 100 && title === null) {
      newTitle = 'heir';
      alert('🏆 ПОЗДРАВЛЯЮ! Ты — Наследник победителей! 🏆');
    }
    
    setScore(newScore);
    setTitle(newTitle);
    handleNext();
  };

  const handleNext = () => {
    if (currentIndex + 1 < CARDS.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(-1);
    }
  };

  const resetGame = () => {
    setScore(0);
    setTitle(null);
    setCurrentIndex(0);
  };

  // Получаем название титула для отображения
  const getTitleText = () => {
    if (title === 'hero') return '⭐ Герой нашего времени ⭐';
    if (title === 'heir') return '🏆 Наследник победителей 🏆';
    return null;
  };

  if (currentIndex === -1) {
    return (
      <div style={{ minHeight: '100vh', background: '#12121a', padding: 20 }}>
        <div style={{ maxWidth: 500, margin: '0 auto', textAlign: 'center', background: '#1e1e2f', borderRadius: 24, padding: 30 }}>
          <h1 style={{ color: 'white' }}>🎉 Поздравляем! 🎉</h1>
          <h2 style={{ color: '#ddd' }}>Ты прошёл все 10 заданий</h2>
          <h1 style={{ color: '#4CAF50', fontSize: 48 }}>{score} очков</h1>
          {title === 'hero' && (
            <div style={{ marginTop: 20, background: '#FFD700', padding: 10, borderRadius: 30 }}>
              ⭐ Герой нашего времени ⭐
            </div>
          )}
          {title === 'heir' && title !== 'hero' && (
            <div style={{ marginTop: 20, background: '#C0C0C0', padding: 10, borderRadius: 30 }}>
              🏆 Наследник победителей 🏆
            </div>
          )}
          <button onClick={resetGame} style={{ marginTop: 30, padding: '12px 24px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, cursor: 'pointer' }}>
            Пройти заново
          </button>
        </div>
      </div>
    );
  }

  const card = CARDS[currentIndex];
  const titleText = getTitleText();

  return (
    <div style={{ minHeight: '100vh', background: '#12121a', padding: 20 }}>
      <div style={{ maxWidth: 500, margin: '0 auto' }}>
        
        {/* Верхняя плашка со счётом */}
        <div style={{ background: '#1e1e2f', borderRadius: 16, padding: 16, marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#aaa' }}>Твои очки</div>
            <div style={{ color: '#4CAF50', fontSize: 32, fontWeight: 'bold' }}>{score}</div>
          </div>
          {titleText && (
            <div style={{ 
              background: title === 'hero' ? '#FFD700' : '#C0C0C0', 
              padding: '6px 12px', 
              borderRadius: 20, 
              color: title === 'hero' ? '#6B4C00' : '#333',
              fontSize: 14,
              fontWeight: 'bold'
            }}>
              {titleText}
            </div>
          )}
          <div style={{ color: '#aaa' }}>
            {currentIndex + 1} / {CARDS.length}
          </div>
        </div>

        {/* Карточка с заданием */}
        <div style={{ background: '#1e1e2f', borderRadius: 24, padding: 24 }}>
          
          {/* ФОТОГРАФИЯ ГЕРОЯ */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <img 
              src={card.image} 
              alt={card.name}
              style={{ 
                width: 120, 
                height: 120, 
                borderRadius: '50%', 
                objectFit: 'cover',
                border: title === 'hero' ? '3px solid #FFD700' : '3px solid #ffaa44',
              }}
            />
          </div>
          
          {/* Имя героя */}
          <h1 style={{ fontSize: 28, marginBottom: 8, color: 'white', textAlign: 'center' }}>
            {card.name}
          </h1>
          
          {/* Качество */}
          <div style={{ color: '#ffaa44', fontSize: 18, marginBottom: 16, textAlign: 'center' }}>
            Качество: {card.quality}
          </div>
          
          {/* Описание */}
          <div style={{ fontSize: 16, lineHeight: 1.4, marginBottom: 24, color: '#ccc', textAlign: 'center' }}>
            {card.description}
          </div>
          
          {/* Разделитель */}
          <div style={{ height: 1, background: '#333', margin: '16px 0' }} />
          
          {/* Задание */}
          <div style={{ fontWeight: 'bold', marginBottom: 8, fontSize: 16, color: 'white' }}>
            📋 Задание на день
          </div>
          <div style={{ fontSize: 15, marginBottom: 32, color: '#ddd', lineHeight: 1.4 }}>
            {card.task}
          </div>
          
          {/* Кнопки */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={handleComplete}
              style={{ flex: 1, padding: '14px', background: '#2e7d32', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 'bold', cursor: 'pointer' }}
            >
              ✅ Выполнено
            </button>
            <button 
              onClick={handleNext}
              style={{ flex: 1, padding: '14px', background: '#3a3a4a', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 'bold', cursor: 'pointer' }}
            >
              ⏩ Следующий
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;