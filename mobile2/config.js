/**
 * 导师称号配置
 * 修改 name / icon / badge / desc 即可全局调整称号名称、样式和升级描述
 *
 * badge 可选值（见 styles.css）：
 *   bdg-gray  —— 灰色（初、中级）
 *   bdg-blue  —— 蓝色（高级）
 *   bdg-gold  —— 金色（资深、金牌）
 */
const TUTOR_LEVELS = [
  {
    lv: 1, name: '三星', icon: '⭐', badge: 'bdg-gray',
    desc: '',
  },
  {
    lv: 2, name: '三星半', icon: '⭐', badge: 'bdg-gray',
    desc: '',
  },
  {
    lv: 3, name: '四星', icon: '⭐', badge: 'bdg-blue',
    desc: '5星导师',
  },
  {
    lv: 4, name: '四星半', icon: '⭐', badge: 'bdg-gold',
    desc: '',
  },
  {
    lv: 5, name: '五星', icon: '⭐', badge: 'bdg-gold',
    desc: '',
  },
];
