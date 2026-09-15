import React from 'react';
import { HeroProblem, Placement, Fast, Insulation, Limitations } from './lab-scenes';
import { HeroSolution, Problems, Genesis, Recipe, Flow, Positioning } from './motion-scenes';
export interface WidgetProps {chapterId:string;moduleId:string;}
export const widgetRegistry:Record<string,React.FC<WidgetProps>> = {
  'hero-problem': HeroProblem,
  'hero-solution': HeroSolution,
  'problems': Problems,
  'placement': Placement,
  'genesis': Genesis,
  'recipe': Recipe,
  'fast': Fast,
  'flow': Flow,
  'insulation': Insulation,
  'positioning': Positioning,
  'limitations': Limitations
};
