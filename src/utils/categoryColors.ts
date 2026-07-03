// 全局 category 配色表，SkillCover 和详情页共用
export const categoryColors: Record<string, {
  bg: string;       // 封面浅色背景
  dot: string;      // 主色（badge 背景 / 色条）
  labelText: string;
  titleColor: string;
  en: string;
  badgeBg: string;  // 详情页 badge 浅色背景
}> = {
  '研究洞察': { bg: '#E0F6FF', dot: '#0284C7', labelText: '#fff', titleColor: '#082F49', en: 'RESEARCH', badgeBg: '#E0F6FF' },
  '视觉生成': { bg: '#E8EEFF', dot: '#002FA7', labelText: '#fff', titleColor: '#001057', en: 'VISUAL',   badgeBg: '#E8EEFF' },
  '组件打磨': { bg: '#ECFDF5', dot: '#059669', labelText: '#fff', titleColor: '#064E3B', en: 'COMPONENT', badgeBg: '#ECFDF5' },
  '审查交付': { bg: '#FFF4ED', dot: '#EA580C', labelText: '#fff', titleColor: '#431407', en: 'REVIEW',   badgeBg: '#FFF4ED' },
};

export function getCategoryColor(category: string) {
  return categoryColors[category] ?? categoryColors['视觉生成'];
}
