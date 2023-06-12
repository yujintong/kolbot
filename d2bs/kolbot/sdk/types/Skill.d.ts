export {};
declare global {
  class SkillDataInfo {
    skillId: number;
    hand: number;
    state: number;
    summonCount: () => number;
    condition: () => boolean;
    townSkill: boolean;
    timed: boolean;
    missleSkill: boolean;
    charClass: number;
    reqLevel: number;
    preReqs: number[];
    damageType: string;
    private _range: number | (() => number);
    private _AoE: () => number;
    private _duration: () => number;
    private _manaCost: number;
    private _mana: number;
    private _minMana: number;
    private _lvlMana: number;
    private _manaShift: number;
    private _bestSlot: number;
    private _dmg: number;
    private _hardPoints: number;
    private _softPoints: number;
    private _checked: boolean;

    constructor(skillId: number);

    duration(): number;
    manaCost(): number;
    range(pvpRange?: boolean): number;
    AoE(): number;
    have(): boolean;
    reset(): void;
  }
  namespace Skill {
    let usePvpRange: boolean;
    const manaCostList: object;
    const needFloor: number[];
    const missileSkills: number[];
    const charges: any[];
    
    function get (skillId: number): SkillDataInfo;
    function getClassSkillRange(classid?: number): [number, number];
    function init(): void;
    function canUse(skillId: number): boolean;
    function getDuration(skillId: number): number;
    function getMaxSummonCount(skillId: number): number;
    function getRange(skillId: number): number;
    function getAoE(skillId: number): number;
    function getHand(skillId: number): number;
    function getState(skillId: number): number;
    function getManaCost(skillId: number): number;
    function isTimed(skillId: number): boolean;
    function townSkill(skillId: number): boolean;
    function missileSkill(skillId: number): boolean;
    function wereFormCheck(skillId: number): boolean;
    function setSkill(skillId: number, hand?: number, item?: any): boolean;
    function shapeShift(mode: number | string): boolean;
    function unShift(): boolean;
    function useTK(unit: Unit): boolean;
    function cast(skillId: number, hand?: number, x?: number, y?: number, item?: ItemUnit | undefined): boolean;
    function cast(skillId: number, hand?: number, unit?: Unit): boolean;
  }
}
