function(properties, context) {
  var props = AirPosthog.props(properties.properties, properties.properties_json);
  if (properties.isOnce) {
    posthog.register_once(props);
  } else {
    posthog.register(props);
  }
}
