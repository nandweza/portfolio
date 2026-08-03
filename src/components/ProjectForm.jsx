import { useState } from "react";

/**
 *  - Create: render with no `project` prop; all fields start empty
 *  - Edit:   render with `project`; fields start pre-filled
 *
 * Field names in onSave() match the API/database:
 *   title, description, image, liveUrl, codeUrl, techStack
 */
const ProjectForm = ({ project, onSave, onCancel }) => {
    const [title, setTitle] = useState(project?.title ?? "");
    const [description, setDescription] = useState(project?.description ?? "");
    const [image, setImage] = useState(null);
    const [liveUrl, setLiveUrl] = useState(project?.liveUrl ?? "");
    const [codeUrl, setCodeUrl] = useState(project?.codeUrl ?? "");

    const [techStackText, setTechStackText] = useState(
        (project?.techStack ?? []).join(", ")
    );

    const [saving, setSaving] = useState(false);

    const handleSubmit = async () => {
        if (!title.trim()) {
            alert("Title is required");
            return;
        }
        setSaving(true);
        await onSave({
            title: title.trim(),
            description: description.trim(),
            image,
            liveUrl: liveUrl.trim(),
            codeUrl: codeUrl.trim(),
            techStack: techStackText
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean),
        });
        setSaving(false);
    };

    return (
        <div className="card p-3 shadow-sm">
            <h5 className="mb-3">{project ? "Edit project" : "New project"}</h5>

            <label className="form-label small mb-1">Title *</label>
            <input
                className="form-control mb-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. OFTAC.ORG - UGANDA"
            />

            <label className="form-label small mb-1">Description</label>
            <textarea
                className="form-control mb-2"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What is this project and what does it do?"
            />

            <label className="form-label small mb-1">Project Image</label>
            <input
                className="form-control mb-2"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
            />

            <label className="form-label small mb-1">Live demo URL</label>
            <input
                className="form-control mb-2"
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                placeholder="https://myproject.onrender.com"
            />

            <label className="form-label small mb-1">Code (GitHub) URL</label>
            <input
                className="form-control mb-2"
                value={codeUrl}
                onChange={(e) => setCodeUrl(e.target.value)}
                placeholder="https://github.com/nandweza/..."
            />

            <label className="form-label small mb-1">
                Tech stack <span className="text-muted">(comma separated)</span>
            </label>
            <input
                className="form-control mb-3"
                value={techStackText}
                onChange={(e) => setTechStackText(e.target.value)}
                placeholder="React, Nodejs, MongoDB"
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

export default ProjectForm;
