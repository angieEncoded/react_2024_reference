// Consider a refactor of this for personal use

import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import Sidebar from "./Components/Sidebar";
import SelectedProject from "./Components/SelectedProject";
import { v4 as uuidv4 } from 'uuid';

function App() {

  // Data definition:
  // undefined means we are not adding a new project and no project has been selected
  // null means we are adding a new project
  // id means we are editing a selected project

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  const handleAddTask = (text) => {

    setProjectsState(previousState => {

      const id = uuidv4();
      // get the project in the expected shape and enrich it with a uuid
      const newTask = {
        text: text,
        projectId: previousState.selectedProjectId,
        id: id
      }

      return {
        ...previousState,
        tasks: [...previousState.tasks, newTask ]
      }
    })
  }

  const handleDeleteTask = (id) => {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        // returns false for the one we want to drops
        tasks: previousState.tasks.filter((item) => item.id !== id)
      }
    })
  }


  const handleAddProject = (projectData) => {

    setProjectsState(previousState => {
      const id = uuidv4();
      // get the project in the expected shapw and enrich it with a uuid
      const newProject = {
        ...projectData,
        id: id
      }
      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: [...previousState.projects, newProject ]
      }
    })
  }

  const handleStartAddProject = () => {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: null,
      }
    })
  }

  const handleCancelAdd = () => {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: undefined,
      }
    })
  }

  const handleSelectProject = (id) => {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: id,
      }
    })
  }

  const handleDeleteProject = () => {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: undefined,
        // returns false for the one we want to drops
        projects: previousState.projects.filter((item) => item.id !== previousState.selectedProjectId)
      }
    })
  }




  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  let content;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject  onAddProject={handleAddProject} onCancelProject={handleCancelAdd}/>
  } else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected  onStartAddProject={handleStartAddProject}/>
  } else {
    content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} drillAddingTask={handleAddTask} drillDeletingTask={handleDeleteTask} drillTasks={projectsState.tasks}/>
  }

  // flexbox automatically stretches to the available height
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar selectedProjectId={projectsState.selectedProjectId} onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject}/>
      {content}
    </main>

  );
}

export default App;