import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Antonio Nascimento</Text>
          <Text color="gray.300" fontSize="small">ant.pnasc@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Antonio Nascimento" src="https://github.com/acpn.png" />
    </Flex>
  );
}
