"use client"

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

export default function ActivitySection() {
  const [activities, setActivities] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newActivity, setNewActivity] = useState({
    title: "",
    description: "",
    photo: "",
    summary: "",
    details: "",
  });
  const [editingActivity, setEditingActivity] = useState(null);

  // Hydration Fix: useEffect to simulate client-side data fetch/update
  useEffect(() => {
    setActivities([
      {
        id: 1,
        title: "Beach Cleanup",
        description: "Join us to clean the beach.",
        photo: "https://via.placeholder.com/150", // Sample photo URL
        summary: "A community effort to make the beach cleaner and safer.",
        details: "We are organizing a beach cleanup event to remove waste, plastics, and other debris from the beach. Volunteers will be provided with all necessary tools and refreshments.",
      },
      {
        id: 2,
        title: "Tree Planting",
        description: "Help us plant trees in the park.",
        photo: "https://via.placeholder.com/150", // Sample photo URL
        summary: "Planting trees to improve the environment and promote greenery.",
        details: "Join us for a tree planting event where we will plant native trees to increase the green cover in the park and help restore the ecosystem.",
      },
    ]);
  }, []);

  const handleOpenModal = () => {
    setNewActivity({ title: "", description: "", photo: "", summary: "", details: "" });
    setEditingActivity(null);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity({ ...newActivity, [name]: value });
  };

  const handleSaveActivity = () => {
    if (editingActivity) {
      setActivities((prev) =>
        prev.map((activity) =>
          activity.id === editingActivity.id ? { ...activity, ...newActivity } : activity
        )
      );
    } else {
      setActivities((prev) => [
        ...prev,
        { id: Date.now(), ...newActivity },
      ]);
    }
    handleCloseModal();
  };

  const handleEditActivity = (activity) => {
    setEditingActivity(activity);
    setNewActivity({
      title: activity.title,
      description: activity.description,
      photo: activity.photo,
      summary: activity.summary,
      details: activity.details,
    });
    setOpenModal(true);
  };

  const handleDeleteActivity = (id) => {
    setActivities((prev) => prev.filter((activity) => activity.id !== id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "background.default",
        position: "relative",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 800,
          p: 4,
          bgcolor: "white",
          boxShadow: 3,
          borderRadius: 2,
          overflowY: "auto",
          maxHeight: "80vh",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Volunteer Activities
        </Typography>

        <List>
          {activities.map((activity) => (
            <ListItem
              key={activity.id}
              sx={{
                border: "1px solid #ddd",
                borderRadius: 2,
                mb: 2,
                p: 2,
                backgroundColor: "background.paper",
                boxShadow: 1,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: "100%",
                      height: 120,
                      backgroundImage: `url(${activity.photo})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {activity.title}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography variant="body2" component="div" sx={{ color: "text.secondary" }}>
                          {activity.summary}
                        </Typography>
                        <Typography variant="body2" component="div" sx={{ color: "text.secondary", mt: 1 }}>
                          {activity.details}
                        </Typography>
                      </>
                    }
                  />
                </Grid>
              </Grid>

              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  color="primary"
                  onClick={() => handleEditActivity(activity)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  color="error"
                  onClick={() => handleDeleteActivity(activity.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleOpenModal}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          boxShadow: 4,
          borderRadius: "16px",
          px: 3,
          py: 1,
        }}
      >
        Add Activity
      </Button>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            {editingActivity ? "Edit Activity" : "Add New Activity"}
          </Typography>
          <TextField
            label="Title"
            name="title"
            fullWidth
            value={newActivity.title}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            value={newActivity.description}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Photo URL"
            name="photo"
            fullWidth
            value={newActivity.photo}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Summary"
            name="summary"
            fullWidth
            value={newActivity.summary}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Additional Details"
            name="details"
            fullWidth
            multiline
            rows={3}
            value={newActivity.details}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveActivity}
            sx={{ width: "100%" }}
          >
            {editingActivity ? "Save Changes" : "Add Activity"}
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
