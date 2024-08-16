import { View } from 'react-native';

import { Typography } from '@/components/common/typography';
import { useProject } from '@/hooks/service/project';

function Project() {
  const { data, isPending } = useProject();

  if (isPending) return <Typography>Loading...</Typography>;

  console.log(data);

  return (
    <View>
      <Typography>Project</Typography>
    </View>
  );
}

export default Project;
