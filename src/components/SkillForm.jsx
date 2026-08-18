import { useState } from "react";
import { iconOptions, categories } from "./IconOPtions";

const SkillForm = ({ skill, onSave, onCancel }) => {
    const [name, setName] = useState(skill?.name ?? "");
    const [category, setCategory] = useState(skill?.category ?? "");
    const [iconKey, setIconKey] = useState(skill?.iconKey ?? "");
    const [iconColor, setIconColor] = useState(skill?.iconColor ?? "");

    const [saving, setSaving] = useState(false);

    const handleSubmit = async () => {
        if (!name.trim()) {
            alert("Name is required");
            return;
        }
        setSaving(true);
        await onSave({
            name: name.trim(),
            category: category.trim(),
            iconKey: iconKey.trim(),
            iconColor: iconColor.trim(),
        });
        setSaving(false);
    };

    return (
        <div className="card p-3 shadow-sm">
            <h5 className="mb-3">{skill ? "Edit Skill" : "New Skill"}</h5>

            <label className="form-label small mb-1">Skill Name *</label>
            <input
                className="form-control mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Python"
            />

            <label className="form-label small mb-1">Skill Category *</label>
            <select
                className="form-control mb-2"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Select category</option>
                {categories.map((category) => (
                    <option
                        key={category.value}
                        value={category.value}
                    >
                        {category.label}
                    </option>
                ))}
            </select>
            <label className="form-label small mb-1">Skill Icon *</label>
            <select
                className="form-select mb-2"
                value={iconKey}
                onChange={(e) => setIconKey(e.target.value)}
            >
                <option value="">Select an icon</option>
                {iconOptions.map((icon) => (
                    <option
                        key={icon.value}
                        value={icon.value}
                    >
                        {icon.label}
                    </option>
                ))}
            </select>

            <label className="form-label small mb-1">Icon Color</label>
            <input
                className="form-control mb-2"
                value={iconColor}
                onChange={(e) => setIconColor(e.target.value)}
                type="color"
                list="colorOptions"
            />

            <datalist id="colorOptions">
                <option value="#ff0000">Red</option>
                <option value="#00ff00">Green</option>
                <option value="#0000ff">Blue</option>
                <option value="#ffff00">Yellow</option>
                <option value="#ff00ff">Magenta</option>
                <option value="#00ffff">Cyan</option>
            </datalist>

            <div>
                <button
                    className="btn btn-sm btn-success me-2"
                    onClick={handleSubmit}
                    disabled={saving}
                >
                    {saving ? "Saving…" : "Save"}
                </button>
                <button
                    className="btn btn-sm btn-secondary"
                    onClick={onCancel}
                    disabled={saving}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default SkillForm;
