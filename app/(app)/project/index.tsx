import { View } from 'react-native';

import { Typography } from '@/components/common/typography';
import { useProject } from '@/hooks/service/project';

function Project() {
  const { data, isPending } = useProject({
    staleTime: 0,
    gcTime: 0,
    refetchOnWindowFocus: true,
  });

  if (isPending) return <Typography>Loading...</Typography>;

  return (
    <View>
      {data?.projects.map((project) => (
        <View key={project.id}>
          <Typography>{project.name}</Typography>
        </View>
      ))}
    </View>
  );
}

export default Project;
