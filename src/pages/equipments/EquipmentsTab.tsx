import { Card } from 'antd';
import { useFetchData } from '../../hooks';
import { EquipmentsTable } from '../../components/dashboard/equipments/equipmentsTable/EquipmentsTable';

const ProjectsTab = () => {
  const { data: projectsData } = useFetchData('../mocks/Projects.json');

  //TODO fetch equipment datas
  
  return (
    <Card title="تجهیزات">
      <EquipmentsTable key="all-equipment-table" data={projectsData} />
    </Card>
  );
};

export default ProjectsTab;
