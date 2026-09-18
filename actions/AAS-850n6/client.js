function(properties, context) {
  posthog.capture(properties.event_name, AirPosthog.props(properties.properties, properties.properties_json));
}
