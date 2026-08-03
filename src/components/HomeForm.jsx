import { useState } from "react";

const HomeForm = ({ home, onSave, onCancel }) => {
    const [name, setName] = useState(home?.name ?? "");
    const [title, setTitle] = useState(home?.title ?? "");
    const [description, setDescription] = useState(home?.description ?? "");
    const [resume, setResume] = useState(home?.resume ?? "");
    const [image, setImage] = useState(null);

    const [saving, setSaving] = useState(false);

    const handleSubmit = async () => {
        if (!title.trim()) {
            alert("Title is required");
            return;
        }
        setSaving(true);
        await onSave({
            title: title.trim(),
            name: name.trim(),
            description: description.trim(),
            resume: resume.trim(),
            image,
        });
        setSaving(false);
    };

    return (
        <div className="card p-3 shadow-sm">
            <h5 className="mb-3">{home ? "Edit About Me" : "New About Me"}</h5>

            <label className="form-label small mb-1">Name *</label>
            <input
                className="form-control mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe"
            />

            <label className="form-label small mb-1">Title *</label>
            <input
                className="form-control mb-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Software Developer"
            />

            <label className="form-label small mb-1">Description</label>
            <textarea
                className="form-control mb-2"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write about yourself..."
            />

            <label className="form-label small mb-1">Resume</label>
            <input
                className="form-control mb-2"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
            />

            <label className="form-label small mb-1">Hero Image</label>
            <input
                className="form-control mb-2"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
            />

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

export default HomeForm;
