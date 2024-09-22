import React, { useState } from 'react';

const ProjectComponent = ({ projectsData, membersData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isNewProject, setIsNewProject] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    name: '',
    deadline: '',
    team: [],
  });

  const handleEditTeam = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setIsNewProject(false); // editing existing project
  };

  const handleAddProject = () => {
    setIsModalOpen(true);
    setIsNewProject(true); // adding new project
    setProjectDetails({
      name: '',
      deadline: '',
      team: [],
    });
  };

  const handleTeamMemberAssign = (member, assign) => {
    setProjectDetails((prevDetails) => {
      const updatedTeam = prevDetails.team.filter((m) => m.id !== member.id);
      return {
        ...prevDetails,
        team: [...updatedTeam, { id: member.id, name: member.name, assign }],
      };
    });
  };

  const handleSaveProject = () => {
    if (isNewProject) {
      const newProject = {
        id: projectsData.length + 1,
        name: projectDetails.name,
        status: 'Ongoing',
        progress: 0,
        deadline: projectDetails.deadline,
        team: projectDetails.team,
      };
      projectsData.push(newProject);
      console.log('New Project Added:', newProject);
    } else {
      setSelectedProject((prevProject) => ({
        ...prevProject,
        team: projectDetails.team,
      }));
      console.log('Team Updated:', selectedProject);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Ongoing Projects Section */}
      <section className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Ongoing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData
            .filter((project) => project.status === 'Ongoing')
            .map((project) => (
              <div key={project.id} className="bg-gray-50 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p>Status: {project.status}</p>
                <p>Progress: {project.progress}%</p>
                <h4 className="mt-4 font-bold">Team Members:</h4>
                <ul className="pl-4 list-disc">
                  {project.team.map((member) => (
                    <li key={member.id}>
                      {member.name} - {member.assign}
                    </li>
                  ))}
                </ul>
                <p>Deadline: {project.deadline}</p>
                <button
                  className="mt-4 bg-blue-500 text-white py-1 px-3 rounded"
                  onClick={() => handleEditTeam(project)}
                >
                  Edit Team
                </button>
              </div>
            ))}
        </div>
        <button
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded"
          onClick={handleAddProject}
        >
          Add New Project
        </button>
      </section>

      {/* Completed Projects Section */}
      <section className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Completed Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData
            .filter((project) => project.status === 'Completed')
            .map((project) => (
              <div key={project.id} className="bg-gray-50 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p>Status: {project.status}</p>
                <p>Progress: {project.progress}%</p>
                <h4 className="mt-4 font-bold">Team Members:</h4>
                <ul className="pl-4 list-disc">
                  {project.team.map((member) => (
                    <li key={member.id}>
                      {member.name} - {member.assign}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    GitHub Link
                  </a>
                </p>
                <p>
                  <a
                    href={project.deploymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Deployment Link
                  </a>
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* Add/Edit Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {isNewProject ? 'Add New Project' : `Edit Team for ${selectedProject.name}`}
            </h2>

            {/* Form for New Project */}
            {isNewProject && (
              <div className="mb-4">
                <label className="block mb-2">Project Name</label>
                <input
                  type="text"
                  className="border p-2 w-full"
                  value={projectDetails.name}
                  onChange={(e) =>
                    setProjectDetails({ ...projectDetails, name: e.target.value })
                  }
                  placeholder="Enter project name"
                />
                <label className="block mt-4 mb-2">Deadline</label>
                <input
                  type="date"
                  className="border p-2 w-full"
                  value={projectDetails.deadline}
                  onChange={(e) =>
                    setProjectDetails({ ...projectDetails, deadline: e.target.value })
                  }
                />
              </div>
            )}

            {/* Team Assignment */}
            <h4 className="font-bold mb-2">Assign Team Members</h4>
            <ul className="space-y-4">
              {membersData.map((member) => (
                <li key={member.id}>
                  <label>
                    <select
                      className="border p-1 rounded"
                      onChange={(e) => handleTeamMemberAssign(member, e.target.value)}
                      defaultValue={
                        projectDetails.team.find((m) => m.id === member.id)?.assign || 'None'
                      }
                    >
                      <option value="None">Select Role</option>
                      <option value="Team Lead">Team Lead</option>
                      <option value="Developer">Developer</option>
                      <option value="Tester">Tester</option>
                      <option value="Other">Other</option>
                    </select>
                    {' '}{member.name}
                  </label>
                </li>
              ))}
            </ul>

            {/* Save Button */}
            <button
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
              onClick={handleSaveProject}
            >
              {isNewProject ? 'Add Project' : 'Save Team'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectComponent;
