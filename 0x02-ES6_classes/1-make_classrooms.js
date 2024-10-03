import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomSize = [19, 20, 34];
  return roomSize.map((size) => new ClassRoom(size));
}
