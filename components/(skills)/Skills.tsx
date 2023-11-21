'use client';
import Rings from '@/components/(skills)/Rings';
import Container from '@/components/ui/Container';
import Content from '@/components/ui/Content';
import Heading from '@/components/ui/Heading';

const Skills = () => {
  return (
    <Container className="text-forePrimary">
      <Heading title="Skills" />
      <Content className="w-full h-screen relative flex items-center justify-center rounded-full ">
        <Rings />
      </Content>
    </Container>
  );
};
export default Skills;
