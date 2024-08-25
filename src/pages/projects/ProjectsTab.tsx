import { Card } from 'antd';
import { ProjectsTable } from '../../components';
import { useFetchData } from '../../hooks';

const ProjectsTab = () => {
  const { data: projectsData } = useFetchData('../mocks/Projects.json');

  //TODO fetch project datas
  
  return (
    <Card title="Projects">
      <ProjectsTable key="all-projects-table" data={projectsData} />
    </Card>
  );
};

export default ProjectsTab;
