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
    lv: 1, name: '初级导师', icon: '🌱', badge: 'bdg-gray',
    desc: '新注册导师起始等级，无门槛要求',
  },
  {
    lv: 2, name: '中级导师', icon: '⭐', badge: 'bdg-gray',
    desc: '响应率≥80% · 完成率≥85% · 好评率≥75% · 累计≥10次',
  },
  {
    lv: 3, name: '高级导师', icon: '🎯', badge: 'bdg-blue',
    desc: '响应率≥88% · 完成率≥92% · 好评率≥85% · 累计≥60次',
  },
  {
    lv: 4, name: '资深导师', icon: '🏅', badge: 'bdg-gold',
    desc: '响应率≥92% · 完成率≥95% · 好评率≥90% · 累计≥150次',
  },
  {
    lv: 5, name: '金牌导师', icon: '🏆', badge: 'bdg-gold',
    desc: '响应率≥95% · 完成率≥98% · 好评率≥95% · 累计≥300次',
  },
];
