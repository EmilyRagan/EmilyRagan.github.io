export interface IResume
{
    experience: IExperience[];
}

export interface IExperience
{
    title: string;
    employer: string;
    dates: string;
    location: string;
    bullets: string[];
}