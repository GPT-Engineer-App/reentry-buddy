import React, { useState } from "react";
import { Box, Button, Container, Heading, VStack, HStack, Text, Input, Textarea, Select, Stack, Checkbox, CheckboxGroup, Divider, useToast } from "@chakra-ui/react";
import { FaPlus, FaCheck } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [plan, setPlan] = useState({
    goals: "",
    tasks: "",
    milestones: "",
    housing: false,
    employment: false,
    healthcare: false,
    community: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPlan((prevPlan) => ({
      ...prevPlan,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Plan Submitted",
      description: "Your personalized re-entry plan has been created.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">
          Personalized Re-Entry Plan
        </Heading>
        <Text>Create your personalized re-entry plan outlining your goals, tasks, and milestones for your transition back into society.</Text>

        <Box w="100%">
          <Heading as="h2" size="lg" mb={4}>
            Goals
          </Heading>
          <Textarea placeholder="Outline your personal goals here" name="goals" value={plan.goals} onChange={handleChange} required />
        </Box>

        <Box w="100%">
          <Heading as="h2" size="lg" mb={4}>
            Tasks
          </Heading>
          <Textarea placeholder="List specific tasks to achieve your goals" name="tasks" value={plan.tasks} onChange={handleChange} required />
        </Box>

        <Box w="100%">
          <Heading as="h2" size="lg" mb={4}>
            Milestones
          </Heading>
          <Textarea placeholder="Define milestones to track progress" name="milestones" value={plan.milestones} onChange={handleChange} required />
        </Box>

        <Heading as="h2" size="lg" my={4}>
          Identify Your Needs
        </Heading>
        <CheckboxGroup colorScheme="green">
          <Stack direction="column" spacing={2}>
            <Checkbox name="housing" isChecked={plan.housing} onChange={handleChange}>
              Stable Housing
            </Checkbox>
            <Checkbox name="employment" isChecked={plan.employment} onChange={handleChange}>
              Secure Employment
            </Checkbox>
            <Checkbox name="healthcare" isChecked={plan.healthcare} onChange={handleChange}>
              Access Healthcare
            </Checkbox>
            <Checkbox name="community" isChecked={plan.community} onChange={handleChange}>
              Reconnect with Community
            </Checkbox>
          </Stack>
        </CheckboxGroup>

        <Divider />

        <Button leftIcon={<FaCheck />} colorScheme="green" type="submit" size="lg" w="full">
          Create Plan
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
