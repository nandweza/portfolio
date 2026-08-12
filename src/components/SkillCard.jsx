import { skillIcons } from "../data/SkillIcons";

const SkillCard = ({ name, iconKey, category, iconColor }) => {

    const Icon = skillIcons[iconKey]

    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card h-100 skill-card border-0 shadow-sm">
                <div className="card-body d-flex align-items-center gap-3">
                    {Icon && (
                        <Icon
                            size={30}
                            color={iconColor}
                        />
                    )}
                    <span className="fw-medium">{name}</span>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
