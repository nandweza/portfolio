import { skillIcons } from "../data/SkillIcons";

const SkillCard = ({ name, iconKey, category, iconColor }) => {

    const Icon = skillIcons[iconKey]

    return (
        <div className="card border-0 shadow-sm w-100">
            <div className="card-body d-flex align-items-center gap-3">
                {Icon && (
                    <Icon
                        size={38}
                        color={iconColor}
                    />
                )}
                <span className="fw-medium fs-5">{name}</span>
            </div>
        </div>
    );
};

export default SkillCard;
