"use client";

import Nav from '../dashboard/components/Navbar/page';
import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, Avatar, IconButton, TextField, Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Inbox() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', content: 'Hey! How are you?', time: '10:45 AM', unread: true, avatar: 'J' },
    { id: 2, sender: 'Jane Smith', content: 'Meeting is rescheduled to tomorrow.', time: '9:30 AM', unread: false, avatar: 'JS' },
    { id: 3, sender: 'Bob Johnson', content: 'Can you review the document?', time: 'Yesterday', unread: false, avatar: 'B' },
    { id: 4, sender: 'Alice Brown', content: 'Let’s catch up later!', time: '8:15 AM', unread: true, avatar: 'A' },
    { id: 5, sender: 'Tom White', content: 'Don’t forget the deadline.', time: '7:45 AM', unread: false, avatar: 'T' },
    { id: 6, sender: 'Emma Green', content: 'Happy Birthday! 🎉', time: 'Monday', unread: true, avatar: 'E' },
  ]);

  const [reply, setReply] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleDelete = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const handleReplyChange = (event) => {
    setReply(event.target.value);
  };

  const handleReply = () => {
    if (selectedMessage) {
      alert(`Reply sent to ${selectedMessage.sender}: ${reply}`);
      setReply('');
    }
  };

  return (
    <>
      <Nav />
      <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'white', p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box
              sx={{
                p: 2,
                maxHeight: '100vh',
                overflowY: 'auto',
                bgcolor: 'background.paper',
                boxShadow: 3,
                borderRadius: '8px',
                width: '100%',
              }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h5">Inbox</Typography>
              </Box>
              <List>
                <TransitionGroup>
                  {messages.map((message) => (
                    <CSSTransition key={message.id} timeout={500} classNames="message">
                      <ListItem
                        sx={{ mb: 2, cursor: 'pointer', p: 0 }}
                        onClick={() => setSelectedMessage(message)}
                      >
                        <Card
                          sx={{
                            width: '100%',
                            boxShadow: message.unread ? 4 : 1,
                            bgcolor: message.unread ? 'background.default' : 'background.paper',
                            '&:hover': { bgcolor: '#004d40', boxShadow: 6, color: 'white' },
                            transition: '0.3s',
                          }}
                        >
                          <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>{message.avatar}</Avatar>
                            <Box sx={{ flexGrow: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: message.unread ? 'bold' : 'normal' }}>
                                {message.sender}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {message.content}
                              </Typography>
                              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                                {message.time}
                              </Typography>
                            </Box>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(message.id)}>
                              <DeleteIcon />
                            </IconButton>
                          </CardContent>
                        </Card>
                      </ListItem>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </List>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                p: 2,
                maxHeight: '100vh',
                bgcolor: 'background.paper',
                boxShadow: 3,
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {selectedMessage ? (
                <Box mb={2}>
                  <Typography variant="h6" gutterBottom>
                    Message from {selectedMessage.sender}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {selectedMessage.content}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    {selectedMessage.time}
                  </Typography>
                </Box>
              ) : (
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Select a message to reply to.
                </Typography>
              )}
              <Box display="flex" alignItems="center" mt="auto">
                <TextField
                  fullWidth
                  placeholder="Type your reply..."
                  value={reply}
                  onChange={handleReplyChange}
                  sx={{ mr: 2 }}
                />
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={handleReply}
                  disabled={!selectedMessage || !reply}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
